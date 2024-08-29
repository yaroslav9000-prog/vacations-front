import "./addVacation.css";

function AddVacation(): JSX.Element {
    const [ ,setDestination]=
    return (
        <div className="addVacation">
			<form action="" encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="vacationDestination" className="form-label">Vacation Destination</label>
                    <input type="text" className="form-control" id="vacationDestination" placeholder="Jerusalem, Israel"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="startDateVacation" className="form-label">Vacation start Date</label>
                    <input type="date" className="form-control" id="startDateVacation" placeholder="Jerusalem, Israel"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="endDateVacation" className="form-label">Vacation end Date</label>
                    <input type="date" className="form-control" id="endDateVacation" placeholder="Jerusalem, Israel"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="vacationDescription" className="form-label">Vacation description</label>
                    <textarea className="form-control" id="vacationDescription" rows={3}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="vacationPrice" className="form-label">Vacation Price</label>
                    <input type="number" className="form-control" id="vacationPrice"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Choose your image</label>
                    <input className="form-control" name="uploaded_image" type="file" id="formFile" />
                </div>
                <div className="mb-3 d-flex">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}

export default AddVacation;
