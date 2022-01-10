export default function Spacer(props) {

    var hspace = 0
    var vspace = 0

    if (typeof props.hspace != "undefined") {
        vspace = props.hspace
    }

    if (typeof props.vspace != "undefined") {
        vspace = props.vspace
    }

    var divStyle = {
        margin: vspace + " " + hspace
    }

    return (
        <div style={divStyle}>
        </div>
    )
}
