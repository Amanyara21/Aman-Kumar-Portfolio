function AboutMe() {
    return (
        <section className="about">
            <div className="sectionHeading text-center">
                <h2 className="sectionText">About Me</h2>
            </div>
            <div className="content flex justify-center items-center my-6 mx-auto">
                <div className="codingImage w-96 h-96">
                    <img className="w-full h-full rounded-full" src="./laptop.jpg" alt="Laptop" />
                    <div className="bubble"></div>
                </div>
                <div className="aboutText w-[40%] text-justify ml-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloribus corporis error impedit, voluptatum autem perferendis voluptatibus nisi sint doloremque voluptate quas architecto culpa deleniti soluta amet ipsum, dolorem illum!</div>
            </div>
        </section>
    )
}
export default AboutMe