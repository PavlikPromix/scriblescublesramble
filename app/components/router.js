import Buttonchik from "./Buttonchik/Buttonchik.js";

function router (){
    const router = userouter();
    const redirecttoanotherpage = ( )=> {
        router.push('/gamepage.js')
    };
    return (
        <div>
            <Buttonchik onclick={redirecttoanotherpage}></Buttonchik>
        </div>
    );

}
export default router;