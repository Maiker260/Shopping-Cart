import shipStyles from "./ShippingInfo.module.css"
import utilStyles from "../../../styles/utilities.module.css"

export default function ShippingInfo () {
    return (
        <article className={`${shipStyles.container} ${utilStyles.flexColumn}`}>
            <h2>SHIPPING & RETURNS</h2>
            <div className={`${utilStyles.flexColumn} ${shipStyles.infoContainer}`}>
                <p>Warranty: 1 year warranty</p>
                <p>We dispatch your order every day at 4pm except on public holidays.</p>
                <p>After dispatch, it takes about:</p>
                <p>2 to 5 working days for metro cities</p>
                <p>4 to 7 working days for the rest of the world.</p>
                <p>We ship your order from London, Uk.</p>
                <p>In case of return, items must be returned in their original condition with our box + packaging + tags / labels as delivered to you, or it will not be accepted by our warehouse.</p>
                <p>Please check our returns policies for more details.</p>
            </div>
        </article>
    )
}