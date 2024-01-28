export function renderDescription(parent, object, index) {
    let newDescription;

    if (parent.id === `videoContainer${index + 1}`) {
        if (object.description.length > 200) {
            newDescription = object.description.substring(0, 200);
        } else {
            newDescription = object.description;
        }

        const videoDescription = document.createElement('p');
        videoDescription.innerText = newDescription
        videoDescription.setAttribute('id', `videoDescription${index + 1}`);
        videoDescription.classList.add('videoDescription');
        parent.append(videoDescription);
    }

    if (parent.id === `publicationContainer${index + 1}`) {
        if (object.description.length > 200) {
            newDescription = object.description.substring(0, 200);
        } else {
            newDescription = object.description;
        }

        const publicationDescription = document.createElement('p');
        publicationDescription.innerText = newDescription
        publicationDescription.setAttribute('id', `publicationDescription${index + 1}`);
        publicationDescription.classList.add('publicationDescription');
        parent.append(publicationDescription);
    }
}