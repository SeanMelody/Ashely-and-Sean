import React from 'react'
import Members from "../../Components/Members/Members"

const WeddingParty = () => {
    return (
        <div>
            <h1 className="google-font">Our Wedding Party</h1>
            <br></br>
            {/* <img src="./images/Group0.jpg" alt="Group" className="border-dark photo-margin img-thumbnail col-md-4"></img> */}
            <div className="container">
                <div className="row justify-content-center">
                    <Members
                        name={"Lauren"}
                        title={"Co-Maid of Honor"}
                        img={"./images/Lauren-and-Ash0.jpg"}
                        bio={"Ashley's best friend, travel partner and adventure lover! Works in graphic design (made our beautiful save the date) and lives in San Francisco"}
                    >
                    </Members>
                    <Members
                        name={"Luzelena"}
                        title={"Co-Maid of Honor"}
                        img={"./images/Luz-and-Ash0.jpg"}
                        bio={"Ashley best friend, cousin, travel partner and adventure lover! Works in pharmaceuticals, and has been a constant help with what is happing with COVID.  Lives in Philadelphia"}
                    >

                    </Members>
                </div>
                <br></br>
                <div className="row justify-content-center">
                    <Members
                        name={"Jessica"}
                        title={"Bridesmaid"}
                        img={"./images/Jessica-and-Ash0.jpg"}
                        bio={"Ashley's bad influence! Amazing Life Coach and has adorable puppies! Lives in San Diego"}
                    >
                    </Members>
                    <Members
                        name={"Elena"}
                        title={"Bridesmaid"}
                        img={"./images/Elena-and-Ash0.jpg"}
                        bio={"Ashley's best friend through high school! Has soooo many good High School Ashley Stories! Lives in Stockton"}
                    >
                    </Members>
                </div>
                <br></br>
                <div className="row justify-content-center">
                    <Members
                        name={"Louise"}
                        title={"Bridesmaid"}
                        img={"./images/Louise-and-Ash0.jpg"}
                        bio={"Ashley's friend from South Africa, they met at Stanford and she loves birthday tequila shots. Lives in San Francisco"}
                    >
                    </Members>
                </div>
                <br></br>
                <div className="row justify-content-center">
                    <Members
                        name={"Joe"}
                        title={"Best Man"}
                        img={"./images/Joe-and-Sean.jpg"}
                        bio={"The reason Ashley and Sean know each other! Sean's best friend even though he routes for the Dodgers, is always down for another beer. Accounting extraordinaire. Lives in El Sobrante, CA"}
                    >
                    </Members>
                    <Members
                        name={"Matt"}
                        title={"Groomsman"}
                        img={"./images/Matt-and-Sean.jpg"}
                        bio={"Sean's only brother, general awesome human, designs buildings in New York City, and can draw anything you can think of, and even those things you can't. Lives in Brooklyn"}
                    >
                    </Members>
                </div>
                <br></br>
                <div className="row justify-content-center">
                    <Members
                        name={"Jeremy"}
                        title={"Groomsman"}
                        img={"./images/Jeremy-and-Sean0.jpg"}
                        bio={"Sean's College Freshman roommate, amazing chiropractor and wire tree artist. Lives in Chico"}
                    >
                    </Members>
                    <Members
                        name={"Renee"}
                        title={"Groomswoman"}
                        img={"./images/Renee.jpg"}
                        bio={"Sean's friend through college and to the bay area. Fellow photo nerd and an accounting extraordinaire, Lives in Seattle"}
                    >
                    </Members>
                </div>
            </div>
        </div>
    )
}

export default WeddingParty
