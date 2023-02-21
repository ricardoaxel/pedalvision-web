interface bpTypes {
  pc: string
  smallpc: string
  tablet: string
  phone: string
}

const dimensions = {
  pc: 1900,
  smallpc: 1000,
  tablet: 850,
  phone: 500,
}

const bp: bpTypes = { pc: "", smallpc: "", tablet: "", phone: "" }

Object.entries(dimensions).forEach(([key, value]) => {
  bp[key as keyof bpTypes] = `@media (max-width: ${value}px)`
})

export { dimensions, bp }
