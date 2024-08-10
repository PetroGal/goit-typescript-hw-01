type AllType = {
  name: string
  position: number
  color: string
  weight: number
}
// 1st mentor's variant
function compare<T extends Pick<AllType, keyof AllType>>(top: T, bottom: T) {}

// 2nd mentor's variant
// function compare<T extends AllType>(
//   top: Pick<T, 'color' | 'name'>,
//   bottom: Pick<T, 'position' | 'weight'>
// ): AllType {}

// my variant
// function compare<T extends keyof AllType>(
//   top: Pick<AllType, T>,
//   bottom: Pick<AllType, T>
// ): Pick<AllType, T> {
//   const result = {} as Pick<AllType, T>

//   for (const key in top) {
//     result[key as T] = top[key as T]
//   }

//   for (const key in bottom) {
//     if (!(key in result)) {
//       result[key as T] = bottom[key as T]
//     }
//   }

//   return result
// }
