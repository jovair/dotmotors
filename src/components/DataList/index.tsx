import DataGrid, { DataGridProps } from 'components/DataGrid'
import * as S from './styles'

export type DataListProps = {
  items: DataGridProps[]
  titleOne: string
  titleTwo: string
}
const DataList = ({ items }: DataListProps) => (
  <S.Wrapper>
    <S.TableTitle>
      <S.ColumnOne>Nome</S.ColumnOne>
      <S.ColumnTwo>CPF</S.ColumnTwo>
    </S.TableTitle>
    <S.DataGridLine>
      {items.map((item) => (
        <DataGrid key={item.secondColumn} {...item} />
      ))}
    </S.DataGridLine>
  </S.Wrapper>
)

export default DataList
