export function renderVideoSection(parentElement, renderingData) {

    const videosWrapper = document.createElement('div');
    videosWrapper.setAttribute('id', 'videosWrapper');
    videosWrapper.classList.add('videosWrapper');
    parentElement.append(videosWrapper);

    renderingData.forEach((object, index) => {

        const videoContainer = document.createElement('div');
        const video = document.createElement('div');
        const videoTitle = document.createElement('h3');
        const videoDescription = document.createElement('p');

        video.innerHTML = `${object.embedLink}`;
        videoTitle.innerText = `${object.title}`;
        videoDescription.innerText = `${object.description}`;

        videoContainer.setAttribute('id', `videoContainer${index + 1}`);
        video.setAttribute('id', `video${index + 1}`);
        videoTitle.setAttribute('id', `videoTitle${index + 1}`);
        videoDescription.setAttribute('id', `videoDescription${index + 1}`);

        videoContainer.classList.add('videoContainer');
        video.classList.add('video');
        videoTitle.classList.add('videoTitle');
        videoDescription.classList.add('videoDescription');

        videosWrapper.append(videoContainer);
        videoContainer.append(video);
        videoContainer.append(videoTitle);
        videoContainer.append(videoDescription);

    });

}

export function renderPublicationSection(parentElement, renderingData) {

    const publicationsWrapper = document.createElement('div');
    publicationsWrapper.setAttribute('id', 'publicationsWrapper');
    publicationsWrapper.classList.add('publicationsWrapper');
    parentElement.append(publicationsWrapper);

    renderingData.forEach((object, index) => {

        const publicationContainer = document.createElement('div');
        const publicationTitle = document.createElement('h3');
        const publicationAuthor = document.createElement('p');
        const publicationDate = document.createElement('p');
        const publicationDescription = document.createElement('p');

        publicationTitle.innerText = `${object.title}`;
        publicationAuthor.innerText = `${object.author}`;
        publicationDate.innerText = `${object.date}`;
        publicationDescription.innerText = `${object.description}`;

        publicationContainer.setAttribute('id', `publicationContainer${index + 1}`);
        publicationTitle.setAttribute('id', `publicationTitle${index + 1}`);
        publicationAuthor.setAttribute('id', `publicationAuthor${index + 1}`);
        publicationDate.setAttribute('id', `publicationDate${index + 1}`);
        publicationDescription.setAttribute('id', `publicationDescription${index + 1}`);

        publicationContainer.classList.add('publicationContainer');
        publicationTitle.classList.add('publicationTitle');
        publicationAuthor.classList.add('publicationAuthor');
        publicationDate.classList.add('publicationDate');
        publicationDescription.classList.add('publicationDescription');

        publicationsWrapper.append(publicationContainer);
        publicationContainer.append(publicationTitle);
        publicationContainer.append(publicationAuthor);
        publicationContainer.append(publicationDate);
        publicationContainer.append(publicationDescription);

    });

}