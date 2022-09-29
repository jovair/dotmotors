import * as S from './styles'

export type DataGridProps = {
  firstColumn: string
  secondColumn: string
}
const DataGrid = ({ firstColumn, secondColumn }: DataGridProps) => (
  <S.Wrapper>
    <S.Content>
      <S.GridLine as="a" href="#">
        <S.ColumnOne className="column">{firstColumn}</S.ColumnOne>
        <S.ColumnTwo className="column">{secondColumn}</S.ColumnTwo>
      </S.GridLine>
    </S.Content>
  </S.Wrapper>
)

export default DataGrid
