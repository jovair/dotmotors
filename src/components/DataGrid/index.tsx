import * as S from './styles'

export type DataGridProps = {
  label?: string
}
const DataGrid = ({label}:DataGridProps) => (
  <S.Wrapper>
    <h1>{label}</h1>
  </S.Wrapper>
)

export default DataGrid
