export default function Botao (props) {
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}