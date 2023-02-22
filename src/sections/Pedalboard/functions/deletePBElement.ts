export const deletePBElement = (
  id: any,
  pedalboardData: any,
  setPedalboardData: any
) => {
  const auxPBData = { ...pedalboardData }
  delete auxPBData[id]
  setPedalboardData({ ...auxPBData })
}
