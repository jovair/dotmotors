import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  id?: string
}

const Logo = ({ color = 'white', size = 'normal' }: LogoProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 75.34"
    >
      <path
        fill="#FD7813"
        d="M21.41 47.81c2.41 4.2 3.47 6.24 4.41 8.16.9-1.92 1.96-3.92 4.36-8.12l4.36-7.75c.98-1.75 2.45-2.9 4.65-2.9s4 1.22 4.73 3.75l6.89 23.98h-8.4l-2.57-9.5c-.86-3.1-1.43-5.3-1.88-7.5-.9 1.92-1.92 4-3.79 7.55l-3.67 6.85c-1.43 2.69-2.81 3.06-4.85 3.06s-3.43-.37-4.85-3.06l-3.67-6.89c-2-3.75-2.98-5.67-3.83-7.5-.41 2.16-1.02 4.45-1.84 7.5l-2.57 9.5H.61l7.06-23.98c.73-2.53 2.65-3.75 4.77-3.75s3.63 1.1 4.61 2.9l4.36 7.71ZM91.37 51.28c0 9.75-6.69 14.11-19.94 14.11s-19.94-4.36-19.94-14.11 6.65-14.07 19.94-14.07 19.94 4.32 19.94 14.07Zm-8.4 0c0-5.87-3.06-6.97-11.54-6.97s-11.54 1.1-11.54 6.97 3.06 7.02 11.54 7.02 11.54-1.14 11.54-7.02ZM129.55 37.66l-5.47 7.1h-9.75v20.19h-8.44V44.76H93.08l5.47-7.1h31ZM167.28 51.28c0 9.75-6.69 14.11-19.94 14.11s-19.94-4.36-19.94-14.11 6.65-14.07 19.94-14.07 19.94 4.32 19.94 14.07Zm-8.4 0c0-5.87-3.06-6.97-11.54-6.97s-11.54 1.1-11.54 6.97 3.06 7.02 11.54 7.02 11.54-1.14 11.54-7.02ZM210.27 64.94h-11.3l-6.08-7.22h-12.97v7.22h-8.44V50.99h23.74c2.61 0 4.65-1.18 4.65-3.06 0-2.12-1.75-3.18-4.65-3.18h-23.74l5.51-7.1h17.54c6.2 0 14.03 1.96 14.03 9.75 0 4.24-2.65 7.75-7.14 8.65.94.69 1.96 1.67 3.83 3.59l5.02 5.3ZM238.58 48.54c6.65 0 10.24 2.49 10.24 7.46 0 5.59-3.39 8.93-11.71 8.93H211.7l5.42-7.02h20.64c2 0 2.9-.57 2.9-2s-.9-1.96-2.9-1.96h-14.85c-7.02 0-10.24-3.14-10.24-7.83 0-5.14 3.43-8.48 11.71-8.48h23.7l-5.42 7.1h-18.93c-1.96 0-2.9.49-2.9 1.88s.94 1.92 2.9 1.92h14.85Z"
      />
      <g>
        <path
          fill="currentColor"
          d="M86.45 34.04H68.18V17.03h8.48v9.99h9.79c4.69 0 8.08-2.61 8.08-6.53s-3.51-6.65-8.08-6.65H68.18l5.38-7.1h12.89c9.54 0 16.44 5.51 16.44 13.38s-6.97 13.91-16.44 13.91ZM146.21 20.38c0 9.75-6.69 14.11-19.94 14.11s-19.94-4.36-19.94-14.11 6.65-14.07 19.94-14.07 19.94 4.32 19.94 14.07Zm-8.4 0c0-5.87-3.06-6.97-11.54-6.97s-11.54 1.1-11.54 6.97 3.06 7.02 11.54 7.02 11.54-1.14 11.54-7.02ZM184.39 6.75l-5.47 7.1h-9.75v20.19h-8.44V13.85h-12.81l5.47-7.1h31Z"
        />
      </g>
    </svg>
  </S.Wrapper>
)

export default Logo
