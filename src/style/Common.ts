import { theme } from "./Theme"



type FondPropsTape = {
   family?: string
   weight?: number
   color?: string
   lineHeight?: number
   Fmin?: number
   Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: FondPropsTape) => `
font-family: ${family || "JetBrains Mono"};
font-weight: ${weight || 400};
color: ${color || theme.color.fond};
line-height: ${lineHeight || 1.2};

font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`