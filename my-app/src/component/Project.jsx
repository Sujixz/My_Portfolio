export default function Project()
{
    return(
    <section className="container p-10 bg-grey-100 text-center" id="project">
        <div className="box">
            <h2 className="text-3xl font-bold mb-4">
                Projects
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-1</h3>
                    <p>E-commerce Amazon does online shopping and delivery of products.</p>
                </div>
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-2</h3>
                    <p>e-Library does online issueing and reading books.</p>
                </div>
            </div>
        </div>
    </section>
    )
}