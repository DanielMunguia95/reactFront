import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'Nombre',
		selector: row => row.nombre,
	},
	{
		name: 'Tipo',
		selector: row => row.tipo,
	},
  {
		name: 'Edición',
		selector: row => row.edicion,
	},
	{
		name: 'Codigo artículo',
		selector: row => row.codigo,
	},
  {
		name: 'Imagen',
		selector: row => row.image,
	},
	{
		name: 'Sinopsis',
		selector: row => row.sinops,
	},
	{
		name: 'Críticas',
		selector: row => row.criticas,
	},
  
];

const data = [
  	{
		id: 1,
		nombre: 'Bleach Tomo 1',
		tipo: 'Manga',
    edicion:'2022',
    codigo:'195',
    image:'',
    sinops:'La adaptación al anime del manga Bleach de Tite Kubo fue producida por Studio Pierrot y dirigida por Noriyuki Abe, con música arreglada por Shirō Sagisu',
    criticas:"Excelente artículo"
	},
	{
		id: 2,
		nombre: 'Naruto Tomo 1',
		tipo: 'Manga',
    edicion:'2022',
    codigo:'195',
    image:'',
    sinops:'',
    criticas:"Excelente artículo"
	},
]

function TableRecherche() {
  return (
    <DataTable
    columns={columns}
    data={data}
  />
  );
}



  export default TableRecherche;