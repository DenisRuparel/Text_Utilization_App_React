export default function Alert(props) {
  return (
    <div>
     {props.alert.type} : {props.alert.msg}
    </div>
  )
}
