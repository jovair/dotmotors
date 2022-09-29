import * as S from './styles'

export type LogoBCProps = {
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const LogoBC = ({ size = 'normal', hideOnMobile = false }: LogoBCProps) => (
  <S.Wrapper size={size} hideOnMobile={hideOnMobile}>
    <S.SVGWrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 224 256"
      role="img"
      aria-label="Burguer Club"
    >
      <g id="logo">
        <path
          id="CLU_1"
          d="M91.53,165.17A53.4,53.4,0,0,1,93,153.56a29.89,29.89,0,0,1,1.69-4.73,15.2,15.2,0,0,1,10.58-8.78,28.3,28.3,0,0,1,16.81.87c5.65,2,9,6.18,10.22,12a28.69,28.69,0,0,1,.57,7.28,4,4,0,0,1-2.85,3.65,6.87,6.87,0,0,1-3.84.07,3.73,3.73,0,0,1-2.81-2.57,11.88,11.88,0,0,1-.52-2.77,15,15,0,0,0-.79-4.57,9.06,9.06,0,0,0-1.08-1.88,3.07,3.07,0,0,0-1.7-1.14,25.72,25.72,0,0,0-8.63-1.07,8.34,8.34,0,0,0-6.34,3.34,5.76,5.76,0,0,0-.72,1.22A21.57,21.57,0,0,0,102,160.8a38,38,0,0,0,1.08,14.59c.19.67.42,1.32.66,2a5.34,5.34,0,0,0,3.92,3.53,17.22,17.22,0,0,0,4,.54c2.34,0,4.68-.17,7-.36a3.76,3.76,0,0,0,3.23-2.34,8.79,8.79,0,0,0,.71-4.26,4.9,4.9,0,0,1,.45-2.31,3.92,3.92,0,0,1,3.13-2.47,9.37,9.37,0,0,1,2.36-.11,4.71,4.71,0,0,1,4.17,3.39,12.66,12.66,0,0,1,.27,7.39c-1.41,5.41-4.94,8.76-10.19,10.41a23.5,23.5,0,0,1-6.07,1,36.71,36.71,0,0,1-12.29-1.4c-6.75-2-10.79-6.55-12.21-13.44A49.45,49.45,0,0,1,91.53,165.17Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="CLU_2"
          d="M145.72,182.85h8.54a8.41,8.41,0,0,1,1.42.11,4.29,4.29,0,0,1,0,8.45,7.28,7.28,0,0,1-1.32.11q-6.25,0-12.53,0a6.69,6.69,0,0,1-1.78-.23,4.33,4.33,0,0,1-3-4c0-.48,0-1,0-1.43q0-11.3,0-22.61a7.64,7.64,0,0,1,.19-1.78,4.28,4.28,0,0,1,8.36.21,8.57,8.57,0,0,1,.13,1.6q0,9.17,0,18.33Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="CLU_3"
          d="M178.4,182.15v-1.8c0-5.89,0-11.78,0-17.67a6.68,6.68,0,0,1,.22-1.78,4.24,4.24,0,0,1,5.24-2.9,11.59,11.59,0,0,1,2.1.86,1.68,1.68,0,0,1,.94,1.69c0,5.79,0,11.59,0,17.39,0,2.18,0,4.37,0,6.55a4,4,0,0,1-1.18,3,12.66,12.66,0,0,1-1.83,1.51,16.51,16.51,0,0,1-7.8,2.7,17.75,17.75,0,0,1-6-.17,10.5,10.5,0,0,1-7.9-6.83,11.87,11.87,0,0,1-.82-4.08c0-2.5,0-5,0-7.5,0-2.94,0-5.89.1-8.83a10.57,10.57,0,0,1,.37-2.81,4.29,4.29,0,0,1,7.25-1.69,2.71,2.71,0,0,1,.79,2c0,4.56,0,9.12,0,13.68,0,1.43,0,2.85,0,4.28a5.35,5.35,0,0,0,.11,1.13,2.67,2.67,0,0,0,2.36,2.27,11.78,11.78,0,0,0,5.6-.71A3,3,0,0,0,178.4,182.15Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="CLU_4"
          d="M205.08,165.59a38.83,38.83,0,0,0-4,.3v-4.54a.51.51,0,0,0,0-.13c0-.1,0-.21,0-.31a4,4,0,1,0-7.9,0c0,.11,0,.21,0,.32a.49.49,0,0,0,0,.12v27.76c0,.7.19,1,1.51,1.28a51,51,0,0,0,10.38,1.14c7.91,0,12.25-4.13,12.25-11.26v-3.43C217.33,169.94,213.33,165.59,205.08,165.59Zm4.35,14.33c0,2.48-.88,4.29-4.35,4.29a36,36,0,0,1-4-.21V173.12c1.17-.1,2.82-.17,4-.17,3.47,0,4.35,1.81,4.35,4.25Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="BUR_1"
          d="M253.19,135.5c.79-26.2-5.36-40.65-5.36-40.65-.1-.36-.21-.71-.32-1.06s-.28-.54-.39-.83c-.52-1.37-1-2.75-1.55-4.13l-.33-.86q-.57-1.5-1.17-3a106.45,106.45,0,0,0-7.66-15,115,115,0,0,0-12.61-17l-.14,0a114.31,114.31,0,0,0-59.37-35.53,108.83,108.83,0,0,0-18.9-2.87l-3.56-.22c-.37,0-.74-.1-1.11-.15H134c-.3.05-.6.12-.9.14-2.85.22-5.7.38-8.53.66A105.3,105.3,0,0,0,108,18,115.89,115.89,0,0,0,37,72.36c-.85,1.5-1.54,3.1-2.24,4.67a3.44,3.44,0,0,0,.58,3.64,4.52,4.52,0,0,0,3.89,1.86c3.6,0,7.2-.07,10.8-.11.92,0,1.83-.08,2.75-.06a3.23,3.23,0,0,1,3.2,2.38,10.89,10.89,0,0,1-.33,7.19,2.4,2.4,0,0,1-2.53,1.65c-2.81-.07-5.63,0-8.45-.07A4.92,4.92,0,0,0,42,94a4.66,4.66,0,0,0-2.56,4.44,4.42,4.42,0,0,0,3.15,4.21,8.43,8.43,0,0,0,2.7.37c2.68,0,5.37-.09,8.05-.07,1.25,0,2.5.18,3.75.31a3.13,3.13,0,0,1,3,2.93,45.35,45.35,0,0,1,.39,5.07,8.61,8.61,0,0,1-.34,2.41,3.81,3.81,0,0,1-4.06,3.1c-4.42,0-8.83,0-13.25,0a3.35,3.35,0,0,0-2.24.83A4.82,4.82,0,0,0,39,120.75a5.25,5.25,0,0,0,5.41,6.38c5.07,0,10.13,0,15.19,0a7.29,7.29,0,0,0,6.59-3.55,29.14,29.14,0,0,0,2.25-4.1c2.1-4.89,2.84-9.9,1-15.07-1.18-3.25-2.82-6.18-5.78-8.17-.05,0-.07-.11-.11-.19a5.29,5.29,0,0,0,.29-.52c.81-1.68,1.72-3.33,2.38-5.07,1.74-4.58.18-11.77-3.73-15.23a9.36,9.36,0,0,0-5.49-2.59c-2.1-.18-4.2-.25-6.3-.38l-.8-.06c24-37.23,73.26-58,121.49-41.46,46.41,16,68.56,57.27,70.7,91.66h0a115,115,0,0,1-10.22,53.9,100.37,100.37,0,0,1-5.56,9.72h0l-.06.08c0,.06-.07.11-.1.16h0c-16.73,27.22-51.64,51.38-95.59,48.57-43.71-2.79-75.26-31.38-88.25-60.45a5.16,5.16,0,0,1,.66-.23,9.75,9.75,0,0,1,1.5-.24,23.24,23.24,0,0,1,10.3,1.47,72.92,72.92,0,0,0,14.41,4.32,32,32,0,0,0,14.34-.34,7.77,7.77,0,0,0,1.53-.55,5.08,5.08,0,0,0-2.25-9.65,9.45,9.45,0,0,0-2.11.32,22.18,22.18,0,0,1-9,.22,63.25,63.25,0,0,1-12.59-3.65,30.39,30.39,0,0,0-8.53-2.26,32.15,32.15,0,0,0-9.74.31,15,15,0,0,0-8.14,4.34,11.87,11.87,0,0,0-1.73,2.38,4.76,4.76,0,0,0-.09,4.86c.24.44.45.91.66,1.37a116,116,0,0,0,100.39,68.68,10.41,10.41,0,0,1,1.1.16h8.76c.33-.05.66-.14,1-.16a115.91,115.91,0,0,0,96-59.71h0a113.23,113.23,0,0,0,14.38-50.57Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_01"
          d="M34.44,222.26l2.5-2.06-1.66-2-2.5,2.05-1-1.16,6-4.91,1,1.16-2.43,2,1.66,2,2.43-2,1,1.16-6,4.91Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_02"
          d="M43.75,232.17l.64-1.29-2-1.92-1.29.65L40,228.51,47.43,225l.84.82-3.39,7.49ZM46.28,227l-2.66,1.32L45,229.69Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_03"
          d="M54.37,241.21l2.77-3.54-3,1.4-.8-.63.63-3.22-2.77,3.54-1.19-.93,4.77-6.07,1.17.91-1,4.53,4.16-2,1.17.91-4.77,6.07Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_04"
          d="M64.65,248.25l-2.74-1.71L66,240l2.63,1.64a2.11,2.11,0,0,1,.88,3.1,1.77,1.77,0,0,1-1.65.85,1.78,1.78,0,0,1,0,2A2.13,2.13,0,0,1,64.65,248.25Zm1.59-2.83-1.34-.83-1,1.6,1.33.84a.92.92,0,0,0,1.36-.28A.9.9,0,0,0,66.24,245.42Zm1.57-2.71-1.25-.78-.94,1.51,1.25.78a.89.89,0,0,0,1.32-.23A.88.88,0,0,0,67.81,242.71Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_05"
          d="M75.54,254.37a2.69,2.69,0,0,1-1.33-3.7l2.25-4.54,1.35.67-2.23,4.5a1.27,1.27,0,0,0,.56,1.86,1.29,1.29,0,0,0,1.84-.67l2.23-4.5,1.34.67-2.26,4.54A2.69,2.69,0,0,1,75.54,254.37Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_06"
          d="M88.81,260.1l-.29-3.42-1-.4-1.12,2.87L85,258.6l2.81-7.19,2.82,1.11a2.33,2.33,0,0,1,1.47,3.11A2.08,2.08,0,0,1,90,257l.39,3.73ZM90,253.73l-1.32-.51L88,255.11l1.33.52a1,1,0,0,0,1.39-.55A1,1,0,0,0,90,253.73Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_07"
          d="M101.88,263.6a2.84,2.84,0,0,1-2.34.21,2.81,2.81,0,0,1-1.75-1.41c-.52-1-.22-1.89.17-3.17s.64-2.2,1.61-2.72a2.83,2.83,0,0,1,2.24-.21,2.78,2.78,0,0,1,2.07,3.21l-1.46-.44a1.3,1.3,0,0,0-1-1.48,1.27,1.27,0,0,0-1,.11c-.38.23-.55.55-1,2s-.47,1.8-.28,2.19a1.26,1.26,0,0,0,.81.67,1.41,1.41,0,0,0,1.15-.11,1.51,1.51,0,0,0,.63-.88l.09-.28-1.36-.41.36-1.21,2.79.85-.33,1.07A3,3,0,0,1,101.88,263.6Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_08"
          d="M112.26,267a2.68,2.68,0,0,1-2.32-3.17l.88-5,1.49.26-.88,4.94a1.34,1.34,0,1,0,2.64.47l.87-4.94,1.48.26-.89,5A2.68,2.68,0,0,1,112.26,267Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_09"
          d="M122.48,268.39l.73-7.68,5.06.47-.13,1.34-3.56-.33-.17,1.8,3,.28-.13,1.34-3-.28-.18,1.86,3.56.34-.12,1.34Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="HAM_10"
          d="M138.93,269.28l-1.49-3.09h-1.08l0,3.08-1.51,0,.06-7.71,3,0a2.33,2.33,0,0,1,2.48,2.38,2.08,2.08,0,0,1-1.42,2l1.69,3.34Zm-1.12-6.39h-1.42l0,2h1.42a1,1,0,1,0,0-2Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_1"
          d="M160.29,267.57l-.65-1.29-2.71.4-.26,1.42-1.56.23,1.66-8,1.17-.18,3.91,7.23Zm-2.57-5.12-.56,2.92,1.9-.28Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_2"
          d="M172.53,265l-2.21-2.62-1,.26.75,3-1.46.36-1.88-7.48,2.94-.74a2.34,2.34,0,0,1,3,1.69,2.09,2.09,0,0,1-.88,2.31l2.48,2.8Zm-2.68-5.9-1.38.34.49,2,1.38-.34a1,1,0,0,0,.82-1.26A1,1,0,0,0,169.85,259.08Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_3"
          d="M181.65,255.45l2.15,6-1.42.51-2.14-6-1.9.67-.46-1.26,5.22-1.87.45,1.27Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_4"
          d="M192.25,258l-3.29-7,4.6-2.17.57,1.22-3.23,1.52.77,1.64,2.76-1.3.57,1.22-2.76,1.3.8,1.69,3.24-1.52.57,1.21Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_5"
          d="M205.19,251.37a3.62,3.62,0,0,1-2.94.57l.34-1.34a2.49,2.49,0,0,0,1.93-.4c.77-.45,1-1,.69-1.52a.83.83,0,0,0-.54-.43,1.15,1.15,0,0,0-.73.11l-.86.37a2.69,2.69,0,0,1-1.62.22,2.11,2.11,0,0,1-1.25-1,2.38,2.38,0,0,1,1.11-3.39,3.29,3.29,0,0,1,2.6-.51l-.33,1.3a2.14,2.14,0,0,0-1.63.36c-.69.41-.8,1-.53,1.45a.73.73,0,0,0,.48.35,1.3,1.3,0,0,0,.77-.1l.85-.36a2.63,2.63,0,0,1,1.57-.24,2.14,2.14,0,0,1,1.35,1.1C207.22,249.17,206.58,250.54,205.19,251.37Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_6"
          d="M217.22,243.2l-1.18-.83-2.2,1.63.43,1.37-1.26.93-2.32-7.88.95-.7,6.85,4.55Zm-4.68-3.32.88,2.84,1.55-1.13Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_7"
          d="M227.16,234.86l-5.45-1.47,3.18,3.52-1.12,1-5.17-5.73,1-.9,5.43,1.46-3.17-3.51,1.12-1,5.18,5.73Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_8"
          d="M236.54,225.29l-1.32-.59-1.85,2,.7,1.27L233,229.16l-3.81-7.28.8-.87,7.6,3.12ZM231.3,223l1.42,2.61,1.29-1.41Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="ART_9"
          d="M241.9,218.89l-6.13-4.69.91-1.19,5.07,3.87,2.13-2.79,1.06.82Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="BUR_2"
          d="M97.87,109.82c0,3.88,0,7.76,0,11.64a3.94,3.94,0,0,1-1.23,3,13.38,13.38,0,0,1-1.82,1.46,16.82,16.82,0,0,1-8.58,2.69,16.77,16.77,0,0,1-4.3-.14,10.53,10.53,0,0,1-8.9-8.63,14.38,14.38,0,0,1-.35-3.07c0-3.09,0-6.19,0-9.29q0-3.18.1-6.38A11,11,0,0,1,73.08,99a4.07,4.07,0,0,1,3-3.16,4.12,4.12,0,0,1,4.15,1.09A2.73,2.73,0,0,1,81.12,99c0,5.91,0,11.83,0,17.74A3.71,3.71,0,0,0,81.7,119a2.2,2.2,0,0,0,1.41,1,5.62,5.62,0,0,0,1.67.17,37.62,37.62,0,0,0,4-.67c.82-.2.79-.29.79-1.13q0-8.31,0-16.62c0-.81,0-1.62,0-2.44a4.24,4.24,0,0,1,5.58-4A12.08,12.08,0,0,1,97,96.1a1.6,1.6,0,0,1,.88,1.6C97.84,101.74,97.87,105.78,97.87,109.82Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="BUR_3"
          d="M109.55,97.59c.71-.25,1.37-.5,2-.73a7.7,7.7,0,0,1,3.69-.35,4.27,4.27,0,0,1,3.76,4.31A4.58,4.58,0,0,1,115,105.3a5.61,5.61,0,0,0-5.25,5.54c0,2.42.06,4.85.1,7.27,0,1.93.07,3.85.09,5.78a4.84,4.84,0,0,1-1.14,3.19,4.26,4.26,0,0,1-7.44-1.63,8.11,8.11,0,0,1-.21-1.84q-.09-9.93-.13-19.86c0-1.36.07-2.73.15-4.1a5,5,0,0,1,1.21-3.06,4.27,4.27,0,0,1,6.68.22C109.2,97.06,109.37,97.32,109.55,97.59Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="BUR_4"
          d="M144.33,113.65c0,4.26,0,8.51,0,12.77a18.56,18.56,0,0,1-1.71,8.29,15.9,15.9,0,0,1-1.64,2.93,9.73,9.73,0,0,1-7.72,4,14.41,14.41,0,0,1-6.16-1.43,14,14,0,0,1-4.62-3.3,4.18,4.18,0,0,1-.58-5.12,4.25,4.25,0,0,1,4.89-1.87,10.78,10.78,0,0,1,3.29,1.55,8,8,0,0,0,2.08,1,1.47,1.47,0,0,0,2.05-1.29c.15-1.43.17-2.87.2-4.3,0-.56-.13-.64-.77-.69-1.59-.13-3.19-.14-4.75-.42-4.19-.74-7.25-3-8.72-7.08a22.39,22.39,0,0,1-1.24-7.47,26.31,26.31,0,0,1,1-8.07,9.86,9.86,0,0,1,6.34-6.77,17.25,17.25,0,0,1,5.66-1.19c2.44,0,4.88,0,7.31-.16a5,5,0,0,1,4.16,2,3.57,3.57,0,0,1,1,2.55C144.31,104.26,144.33,109,144.33,113.65Zm-9.27-10.12c-1.09.1-2.08.23-3.07.27a9.55,9.55,0,0,0-2.54.57,2,2,0,0,0-1.39,1.48,18.19,18.19,0,0,0-.49,6.23,35.3,35.3,0,0,0,.61,3.51,2,2,0,0,0,1.55,1.59,16.93,16.93,0,0,0,5.33.4Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="BUR_5"
          d="M172.57,109.82c0,3.88,0,7.76,0,11.64a4,4,0,0,1-1.24,3,12.8,12.8,0,0,1-1.82,1.46,19.89,19.89,0,0,1-12.88,2.55,10.53,10.53,0,0,1-8.9-8.63,15,15,0,0,1-.35-3.07c0-3.09,0-6.19,0-9.29,0-2.12.05-4.25.11-6.38a10.32,10.32,0,0,1,.24-2.14A4.26,4.26,0,0,1,155,96.91a2.73,2.73,0,0,1,.88,2.09c0,5.91,0,11.83,0,17.74a3.79,3.79,0,0,0,.61,2.22,2.25,2.25,0,0,0,1.42,1,5.55,5.55,0,0,0,1.67.17,37.87,37.87,0,0,0,3.95-.67c.82-.2.8-.29.8-1.13l0-16.62c0-.81,0-1.62,0-2.44a4.23,4.23,0,0,1,5.57-4,12.08,12.08,0,0,1,1.89.81,1.57,1.57,0,0,1,.88,1.6C172.55,101.74,172.57,105.78,172.57,109.82Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="BUR_6"
          d="M203,107.39a14.75,14.75,0,0,0-3.32-8.61,8.76,8.76,0,0,0-5.45-3.27,25.9,25.9,0,0,0-7.56-.27A10,10,0,0,0,181,97.72a17.11,17.11,0,0,0-4.83,7.22,23.29,23.29,0,0,0-1.13,7.44,16.92,16.92,0,0,0,3.28,10.41,12,12,0,0,0,3.19,3.15,21.09,21.09,0,0,0,2,1.2c.94.48,10.88,5.2,17.46-4.59h0c0-.09.09-.19.12-.28a3.88,3.88,0,0,0-3-5.21,6.08,6.08,0,0,0-5.82,1.47c-1.33,1.32-1.3,2.11-4.21,2.27a3.18,3.18,0,0,1-3.61-3.35h0a1.55,1.55,0,0,1,0-.31v0a1.43,1.43,0,0,1,.22-.75l.25-.3a1.69,1.69,0,0,1,.71-.38h.05v0c.31,0,.46,0,.61,0,3.94,0,7.89-.06,11.83,0,2.34.06,4.73-1.21,4.86-4.11C203.13,110.17,203.1,108.77,203,107.39Zm-7.7-1.1c0,1.14-.34,1.39-1.6,1.38s-2.44,0-3.66,0h-3.75c-1.15,0-1.58-.49-1.39-1.54a12,12,0,0,1,.32-1.44,3.26,3.26,0,0,1,2.45-2.28,7.87,7.87,0,0,1,4.61.11,4.7,4.7,0,0,1,2.94,3.07A1.77,1.77,0,0,1,195.33,106.29Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="BUR_7"
          d="M214.31,97.53a35.79,35.79,0,0,1,4-1,6.57,6.57,0,0,1,2.67.26A4.25,4.25,0,0,1,219.9,105a4.85,4.85,0,0,0-3.83,2,6.88,6.88,0,0,0-1.54,4.36c.05,2.32.08,4.65.12,7,0,1.95.1,3.89.08,5.84a4.25,4.25,0,0,1-5.67,4.17,4.06,4.06,0,0,1-2.71-3,7,7,0,0,1-.21-1.58q-.07-10.51-.13-21c0-1.19.07-2.39.15-3.58a4.32,4.32,0,0,1,3.17-4,4.22,4.22,0,0,1,4.77,2Z"
          transform="translate(-30.2 -14.17)"
        />
      </g>
      <g id="TR">
        <path
          id="TR_U"
          d="M138.52,40.54a93.09,93.09,0,0,1,45,14.49,87.85,87.85,0,0,1,10.73,8,3.4,3.4,0,0,0,4.7,0,3.34,3.34,0,0,0,0-4.69,99.72,99.72,0,0,0-45.77-22.64,101.37,101.37,0,0,0-14.63-1.82,3.32,3.32,0,1,0,0,6.64Z"
          transform="translate(-30.2 -14.17)"
        />
        <path
          id="TR_D"
          d="M70.54,201.4a99.77,99.77,0,0,0,45.29,23.34,102.74,102.74,0,0,0,14.71,2.08,3.33,3.33,0,1,0,0-6.65,93.25,93.25,0,0,1-44.79-15.3,87.48,87.48,0,0,1-10.51-8.17,3.4,3.4,0,0,0-4.7,0,3.36,3.36,0,0,0,0,4.7Z"
          transform="translate(-30.2 -14.17)"
        />
      </g>
    </S.SVGWrapper>
  </S.Wrapper>
)

export default LogoBC
