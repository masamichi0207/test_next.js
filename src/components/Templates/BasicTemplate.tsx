import Image from "next/image";
import Header from "../Header";

interface Props {
    children: React.ReactNode;
}
const BasicTemplate = (props: any) => {
    return (
        <>
            <Header />
            {props.children}
            {/* チルドレンにはmain以下が入ってる */}
        </>
    );

};
export default BasicTemplate;