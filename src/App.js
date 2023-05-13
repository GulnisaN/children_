import React from "react";

class Children extends React.Component {
    render() {
        return(
            <div>
                <Child type="Father" name="Maksatbek" lastName="Umetaliev  "/>
                <Child type="Mother" name="Bakhrinissa" lastName="Osmonova  "/>
                <Child type="Sister 1" name="Arzygul" lastName="Umetalieva  "/>
                <Child type="Brother" name="Moldobek" lastName="Nurkulov  "/>
                <Child type="Sister 2" name="Asylgul" lastName="Nurkulova  "/>
                <Child type="Me" name="Gulnisa" lastName="Nurkulova  "/>
            </div>
        )
    }

}

class Child extends React.Component {
    render() {
        return(
            <div className="container">
                <h1 className="first">{this.props.type}</h1>
                <div className="ppp">
                    <h3 className="lastName">{this.props.lastName}</h3>
                    <h4 className="name">{this.props.name}</h4>
                </div>

            </div>
        )
    }
}
export default Children;

