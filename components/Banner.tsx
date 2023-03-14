function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div>
                <h1 className="text-7xl">Ashraf's Daily Blog</h1>
                <h3 className="mt-5 md:mt-0">
                    Welcome to my Blog. This is a fully responsive app that is
                    powered by Sanity studio v3 Content Management System with
                    full TypeScript support. This provides the embedded ability
                    to have a studio in the app along with the power of NextJS
                    13. Feel free to play around and view some of the projects I
                    have worked on. Also, don't forget to add me on LinkedIn.
                </h3>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New Projects | The latest clones | Weekly news updates |
                Leetcode solutions and much more
            </p>
        </div>
    );
}

export default Banner;
