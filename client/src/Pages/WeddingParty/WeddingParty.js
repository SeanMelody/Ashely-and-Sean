import React from 'react'
import Members from "../../Components/Members/Members"

const WeddingParty = () => {
    return (
        <div>
            <h1> Our Wedding Party</h1>
            <br></br>
            <img src="./images/Group.jpg" alt="Group" className="border-dark img-thumbnail col-md-4"></img>
            <div className="container">
                <div className="row justify-content-center">
                    <Members
                        name={"Lauren"}
                        title={"Co-Maid of Honor"}
                        img={"./images/Lauren-and-Ash0.jpg"}
                        bio={"Ashley's best friend, travel partner and adventure lover! Lives in San Francisco"}
                    >
                    </Members>
                    <Members
                        name={"Luzelena"}
                        title={"Co-Maid of Honor"}
                        img={"./images/Luz-and-Ash0.jpg"}
                        bio={"Ashley favorite family member, travel partner and adventure lover! Lives in Philadelphia"}
                    >

                    </Members>
                </div>
                <br></br>
                <div className="row justify-content-center">
                    <Members
                        name={"Jessica"}
                        title={"Bridesmaid"}
                        img={"./images/Jessica-and-Ash0.jpg"}
                        bio={"Ashley's bad influence! Amazing Life Coach has adorable puppies! Lives in San Diego"}
                    >
                    </Members>
                    <Members
                        name={"Elena"}
                        title={"Bridesmaid"}
                        img={"./images/Elena-and-Ash0.jpg"}
                        bio={"Ashley's best friend through high school! Used to have a car that would honk every time you turned the wheel! Lives in Stockton"}
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
                        img={"./images/Joe-and-Ash0.jpg"}
                        bio={"The reason Ashley and Sean know each other! Also Sean's first San Francisco Friend, and all around bad influence Lives in El Cerrito, CA"}
                    >
                    </Members>
                    <Members
                        name={"Matt"}
                        title={"Groomsman"}
                        img={"./images/Matt-and-Sean0.jpg"}
                        bio={"Sean's brother, General awesome human. Lives in Brooklyn"}
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
                        title={"Groomsman"}
                        img={"./images/Renee0.jpg"}
                        bio={"Sean's friend through college and to the bay area, fellow photo nerd! Lives in Seattle"}
                    >
                    </Members>
                </div>
            </div>
        </div>
    )
}

export default WeddingParty
