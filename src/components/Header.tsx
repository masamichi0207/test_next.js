import Image from "next/image";

const Header = (props: any) => {
    return (
        <div key={props} style={{ textAlign: "center" }} >
            <Image
                src="/header.png"
                alt="Next.js Logo"
                width={800}
                height={200}
                priority
                style={{ height: "200px" }}
            />

            <h1>{props.title}</h1>
        </div>

    );
};
export default Header;