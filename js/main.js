let textareaElement=document.getElementById("textareaId");
function changeTextSize(event)
{
    let newFontSize=event.value
    textareaElement.style.fontSize=newFontSize+'px';
}
function boldText()
{
    if(textareaElement.style.fontWeight=='bold')
    textareaElement.style.fontWeight='normal'
    else
    textareaElement.style.fontWeight='bold'
}
function italicText()
{
    if(textareaElement.style.fontStyle=='italic')
    textareaElement.style.fontStyle='normal'
    else
    textareaElement.style.fontStyle='italic'
}
function underlineText()
{
    if(textareaElement.style.textDecoration=='underline')
    textareaElement.style.textDecoration='none'
    else
    textareaElement.style.textDecoration='underline'
}
function alignTextToLeft()
{
    if(textareaElement.style.textAlign=='left')
    textareaElement.style.textAlign='initial'
    else
    textareaElement.style.textAlign='left'
}
function alignTextToMiddle()
{
    if(textareaElement.style.textAlign=='center')
    textareaElement.style.textAlign='initial'
    else
    textareaElement.style.textAlign='center'
}
function alignTextToRight()
{
    if(textareaElement.style.textAlign=='right')
    textareaElement.style.textAlign='initial'
    else
    textareaElement.style.textAlign='right'
}
function changeTextColor(e)
{
    let newColor=e.value;
    textareaElement.style.color=newColor;
}
