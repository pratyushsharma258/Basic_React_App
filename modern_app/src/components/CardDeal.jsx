import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better transaction security <br className="sm:block hidden" /> in few easy
                steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                AI-assisted secure browser features for transactions & invoicing: SSL/TLS encryption, fraud detection, biometric authentication, and AI-powered phishing protection.
            </p>

            <Button styles={`mt-10`} />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="billing" className="w-[100%] h-[100%]" />
        </div>
    </section>
);

export default CardDeal;