import { CommonProps } from "../../types/CommonTypes"

interface ILoader extends CommonProps{
    loading: boolean
}
const Loader = (props: ILoader) => {
    const {loading, children} = props
    return (
       loading ? <div>Loading....</div> : children
    )
}

export default Loader

