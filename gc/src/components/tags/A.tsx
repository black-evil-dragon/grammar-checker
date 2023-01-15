import Link from "next/link"
import { LinkProps } from "../../types"
import { useRouter } from "next/router"

const A: React.FunctionComponent<LinkProps> = ({children, href}) => {
    const router = useRouter()

    const handleClick = (event: Event) => {
        event.preventDefault()
        router.push(href)
    }
    return (
        <Link href={href} onClick={(event: any) => handleClick(event)}>
            {children}
        </Link>
    )
}
export default A