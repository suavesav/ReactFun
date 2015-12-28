import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {data: [
            {id: 1, name: "George Pickett"},   
            {id: 2, name: "Desa Radic"},   
            {id: 3, name: "Jamila Lelani"},   
            {id: 4, name: "Roxanne Black"},   
            {id: 5, name: "Camille De Nes"},   
            {id: 6, name: "Shaun Quirk"},   
            {id: 7, name: "Steve Ricks"},   
            {id: 8, name: "Varun Kandadi"},   
            {id: 9, name: "Tom Alcorn"},   
            {id: 10, name: "Adam Baratz"},   
            {id: 11, name: "Alissa McKnight"},   
            {id: 12, name: "Craig Povey"},   
        ]}
    }
    render(){
        let rows = this.state.data.map(person => {
            return <PersonRow data={person} key={person.id} />
        })
        return (
                <table> 
                <tbody> {rows} </tbody>
                </table>
                )
    }
}

const PersonRow = (props) => {
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        </tr>
}

export default App
