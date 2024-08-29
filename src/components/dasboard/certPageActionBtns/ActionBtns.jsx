// icons
import verifiedPinIcon from "../../../../public/assets/icons/pin.png"
import suspendIcon from "../../../../public/assets/icons/suspend.png"
import deleteIcon from "../../../../public/assets/icons/delete.png"
import dropDownIcon from "../../../../public/assets/icons/dropdown.png"
import addIcon from "../../../../public/assets/icons/add.png"
// styles
import styles from "./ActionBtns.module.css"
import Image from "next/image"

const ActionBtns = ({
    addBtnHander
}) => {
    return(
        <div className={styles.container}>
            {/* filter */}
            <div className={styles.filterBtnContainer}>
                <form action="">
                <input type="text" list="fitler"/>
                <datalist id="filter">
                    <option value="Edge" />
                    <option value="Edge" />
                    <option value="Edge" />
                    <option value="Edge" />
                    <option value="Edge" />
                    <option value="Edge" />
                </datalist>
                </form>
            </div>
            {/* verified */}
            <div className={`${styles.btn} ${styles.verifiedItemContainer}`}>
                <span>
                    <Image src={verifiedPinIcon} width={20} height={20} alt="veified"/>
                </span>
                <span className={styles.verified}>Verified<span>(2)</span></span>
            </div>
            {/* suspend action */}
            <div className={`${styles.btn} ${styles.pinkBtns}`}>
                <span>
                    <Image src={suspendIcon} width={20} height={20} alt="veified"/>
                </span>
                <span>Suspend</span>
            </div>
            {/* Remove action */}
            <div className={`${styles.btn} ${styles.pinkBtns}`}>
                <span>
                    <Image src={verifiedPinIcon} width={20} height={20} alt="veified"/>
                </span>
                <span>Remove</span>
            </div>
            {/* add btn acction  */}
            <div className={`${styles.btn} ${styles.addBtns}`} onClick={()=> addBtnHander()}>
                <span>
                    <Image src={addIcon} width={20} height={20} alt="veified"/>
                </span>
                <span>Add</span>
            </div>
        </div>
    )
}

export default ActionBtns;