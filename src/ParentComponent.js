import ChildComponent from "./ChildComponent";
//부모 컴포넌트 ParentComponent.js
function ParentComponent(){
    return (
        <div>
            <h3>나는 부모입니다.</h3>
            <div>
                <h1>내 자식을 소개합니다.</h1>
                <ChildComponent name='민수' age={27}/>
                <ChildComponent name='그랩' age={28}/>
            </div>
        </div>
        
    )
}

export default ParentComponent;