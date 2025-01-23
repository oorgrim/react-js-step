import './App.css';

function App() {
      // const onClick = (event) => {
      //   console.log("Click", event)
      // }
      // const onChange = (event) => {
      //   console.log("on Change",)
      // }
      // return (
      //   // <div onClick={onClick}>
      //   //   test
      //   // </div>
      //   <div>
      //     <input type='text'>
      //     <button onClick={onClick}></button>
      //     </input>
      //   </div>
      // )

      const names = [
        {id: 1, name: 'Madiyar', surname:'Dzhetibergen'},
        {id: 2, name: 'Artyom', surname:'Chen'},
        {id: 3, name: 'Marlen', surname:'Zhaksybay'}
      ]

      return (
        <ul>
          {names.map((name)=>
          <li key={name.id}>{name.name}{name.surname}</li>
          )}
        </ul>
      )
}

export default App;
