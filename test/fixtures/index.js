export default {
  getImage () {
    return {
      id: '1fb920b1-79b2-4f4c-8549-a6d223e1a9bd',
      publicId: '0XRmFT2AhU2P8RVHxUq3Rb',
      userId: 'mauricio',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/0XRmFT2AhU2P8RVHxUq3Rb.jpg',
      description: '#awesome',
      tags: ['awesome'],
      createAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  }
}
