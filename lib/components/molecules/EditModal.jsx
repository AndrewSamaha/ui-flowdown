export const EditModal = (props) => {
    return (
    <div style={{
        height: '100%',
        width: '100%',
        position: 'fixed',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'}}  onClick={props.action} >
      Thisis the edit modal. There are many like it butthis one is yours.
    </div>
    );
    //   {props.name} - {props.artist} - {props.duration.string}
}