import Image from "next/image";

const features = [
    {
        id:1,
        title:'Store Links Easily.',
        description:'Save your favorite websites with a single click.',
        imageUrl:'/icons/store.svg'
    },
    {
        id:2,
        title:'Powerful Search.',
        description:'Quickly find any saved link with our advanced search functionality.',
        imageUrl:'/icons/search.svg'
    },
    {
        id:3,
        title:'Organize Into Collections.',
        description:'Create customized bookmarks to organize your bookmarks.',
        imageUrl:'/icons/collection.svg'
    }
]

const Features = () =>{
    return (
        <section className="text-white w-full flex justify-center items-center">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex flex-col justify-center items-center">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold text-white sm:text-5xl">What makes us special</h2>

                    <p className="mt-4 text-gray-400">
                        Keep your online world organized and easily accessible.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    {
                        features.map((feature) => (
                            <div className="flex items-start gap-4" key={feature.id}>
                                <span className="shrink-0 rounded-lg bg-indigo-600 p-4">
                                    <Image src={feature.imageUrl} alt={feature.title} width={30} height={30}/>
                                </span>

                                <div>
                                    <h2 className="text-lg font-bold">{feature.title}</h2>

                                    <p className="mt-1 text-sm text-gray-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Features;