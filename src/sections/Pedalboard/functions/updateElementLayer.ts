export const updateElementLayer = (
  id: any,
  num: any,
  pedalboardData: any,
  setPedalboardData: any
) => {
  const auxPB = { ...pedalboardData }
  const newNum = parseInt(auxPB[id]["layer"]) + num
  auxPB[id]["layer"] = newNum < 1 ? 1 : newNum > 10 ? 10 : newNum
  setPedalboardData({ ...auxPB })
}
