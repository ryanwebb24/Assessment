const complimentBtn = document.getElementById("compliment-btn")
const fortuneBtn = document.getElementById("fortune-btn")
const feedbackForm = document.getElementById('feedback')
const feedbackRating = document.getElementById('rating')
const feedbackComment = document.getElementById('comment')
const allStars = document.getElementById('star-rating').getElementsByTagName('span')
const changeCommentForm = document.getElementById('changed-comment')
const changeCommentId = document.getElementById('id-num')
const changeCommentText = document.getElementById('changed-comment-text')
const commentBody = document.getElementById('comment-body')
const commentBtn = document.getElementById('comment-btn')
const deleteForm = document.getElementById('delete-comment')
const deleteCommentId = document.getElementById('id-delete')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data
            alert(data)
    })
}
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
    })
}
const addFeedback = event => {
    event.preventDefault()
    let feedback = {
        rating: +feedbackRating.value,
        comment: feedbackComment.value
    }
    axios.post("http://localhost:4000/api/feedback/", feedback)
    .then(res => {
        let ratingSum = res.data.reduce((acc, curr) => acc + curr.rating, 0)
        let ratingAvg = Math.round(ratingSum / res.data.length)
        for(let i = 0; i < allStars.length; i++){
            allStars[i].classList.remove('checked')
        }
        for(let i = 0; i < ratingAvg; i++){
            allStars[i].classList.add('checked')
        }
        feedbackRating.value = ''
        feedbackComment.value = ''
    })
}
const changeComment = event => {
    event.preventDefault()
    commentBody.innerHTML = ''
    let comment = { comment: changeCommentText.value }
    axios.put(`http://localhost:4000/api/feedback/${+changeCommentId.value}`, comment)
    .then( (res) => {
        for (let i in res.data){
            createComment(res.data[i].comment)
        }
        alert("Comment changed!")
        changeCommentId.value = ''
        changeCommentText.value = ''
    })
    .catch((err) => {
        if (err.response){
            alert('Invalid id or no comments')
        }
    })
}
const getFeedback = () => {
    commentBody.innerHTML = ''
    axios.get("http://localhost:4000/api/feedback/")
        .then(res => {
            if (res.data.length === 0){
                createComment('No comments yet')
            }
            for (let i in res.data){
                createComment(res.data[i].comment)
            }
    })
}
const deleteComment = event => {
    event.preventDefault()
    commentBody.innerHTML = ''
    axios.put(`http://localhost:4000/api/feedback/${+deleteCommentId.value}`)
    .then( (res) => {
        for (let i in res.data){
            createComment(res.data[i].comment)
        }
        alert("Comment deleted!")
        deleteCommentId.value = ''
    })
    .catch((err) => {
        if (err.response){
            alert('Invalid id or no comments')
        }
    })
}
function createComment(comment) {
    let commentP = document.createElement('p')
    commentP.textContent = comment
    commentBody.appendChild(commentP)
}

commentBtn.addEventListener('click', getFeedback)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
feedbackForm.addEventListener('submit', addFeedback)
changeCommentForm.addEventListener('submit', changeComment)
deleteForm.addEventListener('submit', deleteComment)