/** @jsx h */
import { h } from "https://deno.land/x/sift@0.5.0/mod.ts";

export function Avatar4(bgColor: string, denoColor: string[]) {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect width="112" height="112" fill={bgColor} />
        <path
          d="M57.4486 37.9912C38.7446 33.862 25 43.1171 25 56.7861C25 71.8221 44.034 79.6015 54 81.5C56.3616 93.6977 61.076 122.056 57.4486 138.8C53.8211 155.545 60.9437 190.202 64.9585 205.437C79.9783 206.291 112.342 208 121.637 208C133.256 208 146.434 195.185 151.11 195.755C154.851 196.21 173.262 191.863 182 189.632C171.845 188.113 151.45 180.804 151.11 163.718C150.685 142.36 107.468 117.87 100.949 114.88C94.4314 111.889 89.7554 82.2732 88.3384 69.6009C86.9215 56.9285 76.1525 42.1204 57.4486 37.9912Z"
          fill={denoColor[0]}
          stroke={denoColor[2]}
          stroke-width="3"
        />
        <path
          d="M54 81.5C58.5 82.5 62.5 81.5 64.5 80.5"
          stroke={denoColor[1]}
          stroke-opacity="0.5"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M57.2623 42.5388C60.3256 42.8883 63.3566 42.5699 65.7717 41.2101C68.2623 39.8077 69.9276 37.39 70.3185 33.9636C70.7095 30.5372 69.6316 27.8065 67.5209 25.8791C65.4742 24.0102 62.5928 23.0172 59.5295 22.6677C56.4116 22.312 53.3706 22.7797 50.9712 24.1987C48.5257 25.6449 46.8395 28.0325 46.4732 31.2429C46.1069 34.4534 47.2119 37.1594 49.2688 39.1194C51.2869 41.0424 54.1444 42.1831 57.2623 42.5388Z"
          fill="#FFB26B"
          stroke="#E17D21"
          stroke-width="3"
        />
        <path
          d="M57.3395 18.8952L63.0951 19.5519C64.3255 20.6913 66.2684 22.9111 64.1964 22.6747C61.6064 22.3792 62.3862 25.765 61.1498 23.8256C59.9135 21.8863 57.883 24.352 56.8332 23.3331C55.9933 22.518 54.6772 21.7884 54.1242 21.5255L57.3395 18.8952Z"
          fill="#53B356"
        />
        <path
          d="M51 58L43 55"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M33 50.5L28 48"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
