import DetailsButton from "../UI/DetailsButton";

const SecuritySetup = () => {
    return <section className="mr-auto 2xl:-mr-48">
        <p className="text-xl mb-12 font-medium text-ash2">Security Setup</p>
      <div className="flex flex-col space-y-3 mb-7">
        <label htmlFor="password">Create new password</label>
        <input type="text" id="password" className="border h-14 rounded-md border-ash"/>
        <label htmlFor="confirm-password">Create new password</label>
        <input type="text" id="confirm-password" className="border h-14 rounded-md border-ash "/>
        
        </div>
        <DetailsButton text={"Finish Up"} />
    </section>
};

export default SecuritySetup;