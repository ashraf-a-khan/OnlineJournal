import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title } = props;

    return (
        <div className="flex items-center space-x-2">
            <Image
                className="rounded-full"
                height={50}
                width={50}
                src="https://www.shutterstock.com/shutterstock/photos/755744683/display_1500/stock-vector-concept-of-blogging-golden-blog-word-bubble-message-in-pop-art-comic-style-755744683.jpg"
                alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    );
}

export default Logo;
