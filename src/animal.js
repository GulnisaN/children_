import React from "react";

class Animals extends React.Component {
    render() {
        return (
            <div>
                <Child2 species="dog" name="name: Aktosh" age="age: 6" color="color: black"/>
                <Child2 species="cat" name="name: Bonya" age="age: 3" color="color: grey"/>
                <Child2 species="parrot" name="name: Jorka" age="age: 9" color="color: blue"/>
                <Child2 species="fish" name="name: Fanta" age="age: 1" color="color: yellow"/>
                <Child2 species="Panda" name="name: Panda" age="age: 20" color="color: black-white"/>
            </div>
        );
    }
}

class Child2 extends React.Component {
    render() {
        return (
            <div className="container2">
                <h2>Animal:</h2>
                <div className="animals">
                    <h3>{this.props.species}</h3>
                    <h4>{this.props.name}</h4>
                    <h5>{this.props.age}</h5>
                    <h5>{this.props.color}</h5>
                </div>
            </div>
        );
    }
}

export default Animals;