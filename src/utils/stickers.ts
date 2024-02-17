import { useEffect, useRef, useState } from 'react';

import { STICKER_DATA, StickerData, stickerHeight } from '~/constants/stickers';

type StickerObj = StickerData & {
  coords: [number, number];
};

const emptyStickers: StickerObj[] = [];

export const useStickers = () => {
  const [stickers, setStickers] = useState<StickerObj[]>(emptyStickers);
  const stickerIndexRef = useRef(0);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const { src, alt } = STICKER_DATA[stickerIndexRef.current];
      const nextIdx = stickerIndexRef.current + 1;
      stickerIndexRef.current = nextIdx >= STICKER_DATA.length ? 0 : nextIdx;
      setStickers((prevStickers) => [
        ...prevStickers.slice(
          // Remove the oldest sticker if there would be more than 3x
          // the number of available stickers
          // (aka each sticker has already been placed 3x)
          // This is a performance save (but like, this isn't too heavy...)
          // but also kind of fun that they make a little snake
          prevStickers.length + 1 > STICKER_DATA.length * 3 ? 1 : 0
        ),
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

  return stickers;
};
