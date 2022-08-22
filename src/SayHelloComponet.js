function SayHelloComponent(){
    const sayHello = function(){
        alert('안녕 나는 그랩이야');
    }
    return (
        //위에서 배웠던 Callback 함수, 클릭했을 때 sayHello 함수가 실행됩니다.
        <div onClick={sayHello}>
            <h3>클릭해보세요</h3>
        </div>
    )
}
export default SayHelloComponent;