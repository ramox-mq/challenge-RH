function SeccionAcceso() {
    return (
        <section className="search-wrap">
            <div className="search">
                <label htmlFor="search">
                    <i
                        className="bi bi-search"
                        style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                    />
                    <input type="text" id="search" />
                </label>
            </div>
            <div className="user-actions">
                <button>
                    <a href="#">
                        <i
                            className="bi bi-person-add"
                            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                        />
                    </a>
                </button>
                <button>
                    <a href="#">
                        <i
                            className="bi bi-person"
                            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                        />
                    </a>
                </button>
                <button>
                    <a href="#">
                        <i
                            className="bi bi-box-arrow-right"
                            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                        />
                    </a>
                </button>
            </div>
        </section>
    )
}

export default SeccionAcceso;