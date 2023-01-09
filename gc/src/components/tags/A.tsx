import Link from "next/link"
import { LinkProps } from "../../types"

const A: React.FunctionComponent<LinkProps> = ({children, href}) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}
export default A