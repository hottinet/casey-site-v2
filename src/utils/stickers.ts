import { useEffect, useRef, useState } from 'react';

import { STICKER_DATA, StickerData, stickerHeight } from '~/constants/stickers';

type StickerObj = StickerData & {
  coords: [number, number];
};

const emptyStickers: StickerObj[] = [];

export const useStickers = () => {
  const stickerRef = useRef<StickerObj[]>(emptyStickers);
  const [stickers, setStickers] = useState<StickerObj[]>(emptyStickers);
  const stickerIndexRef = useRef(0);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const { src, alt } = STICKER_DATA[stickerIndexRef.current];
      const nextIdx = stickerIndexRef.current + 1;
      stickerIndexRef.current = nextIdx >= STICKER_DATA.length ? 0 : nextIdx;
      setStickers([
        ...stickerRef.current,
        {
          src,
          alt,
          // Adjust these minus values to change where the sticker drops
          // in relation to the cursor
          coords: [
            e.clientX - 60,
            e.clientY + document.documentElement.scrollTop - stickerHeight / 2,
          ],
        },
      ]);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    stickerRef.current = stickers;
  }, [stickers]);

  return stickers;
};
