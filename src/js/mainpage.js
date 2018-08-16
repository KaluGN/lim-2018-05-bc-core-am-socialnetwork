$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(document).ready(() => {
  $buttonFood = $('#button-food');
  $buttonFoodPrivate = $('#button-food-private')
  $containerNewPost = $('#container-new-post');
  $containerNewPostPrivate = $('#container-new-post-private')
  $comment = $('#comment');
  $commentPrivate = $('#comment-private')

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var codeUser = user.uid;
      var nameUser = user.email;
      var photoUser = user.photoURL;
      var like = 0;
      
      /* Publico */
      $buttonFood.on('click', function (event) {
        if ($comment.val() && $comment.val() !== 0) {
          var publication = $comment.val();
          var hour = moment().format('LT');

          firebase.database().ref('bd').child('publication').push({
            publication: publication,
            hour: hour,
            code: codeUser,
            name: nameUser,
            photo: photoUser !== null ? photoUser : 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
            like: like,
          });
        }
      });

      showPublication();
      function showPublication() {
        firebase.database().ref('bd').on('value', (element) => {

          var data = element.child('publication').val();
          var uid = Object.keys(data)
          var arrNewData = []

          uid.map(elem => {
            data[elem].uid = elem
            arrNewData.push(data[elem])
          })

          $containerNewPost.html('');
          arrNewData.map(elem => {

            var na = elem.name;
            var be = na.indexOf('@')
            var nameMail = na.slice(0,be) 
 
            $containerNewPost.prepend(`
                 <div class="col-xs-12 container-background container-food container-public-private">
                    <div id="container-icon-user" class="col-lg-1 container-food ">
                      <img class="profile img-responsive img-circle user-background" src='${elem.photo}'>
                    </div>
                    <div id="container-publication" class="col-lg-11 ">
                      <div class="container-img">
                        <div class="col-lg-6 not-padding">
                          <p class="text name" color=yellow >${nameMail}</p>
                        </div>
                        <div class="col-lg-6 img not-padding">
                          <img class="img-responsive like delete container-delete" src='../../img/muro/delete.svg' data-uid=${elem.uid} data-delete=${elem.code}>
                        </div>
                      </div>
                      <div class="container-publication-day" data-newPublication=${elem.code}>
                        <p id="publication-day" class="text publication">${elem.publication}</p>
                      </div>
                      <div></div>
                      <p class="delete container-edit edit" data-uid=${elem.uid} data-edit=${elem.code}>Editar</p>
                      <div class="container-img">
                        <div class="col-lg-6 flex not-padding">
                          <img class="img-responsive like container-like" src='../../img/muro/like.svg' data-uid=${elem.uid} data-like=${elem.like}>
                          <p class="num-like">${elem.like}</p>
                        </div>
                        <div class="col-lg-6 not-padding">
                          <p class="text hour  img">${elem.hour}</p>
                        </div>
                      </div>
                    </div>
                </div>`);
          });
        
          // cuenta likes
          $('.container-like').on('click', function (e) {
            e.preventDefault();
            var uidData = $(this).data('uid')
            var likeData = $(this).data('like')

            uid.map(elem => {
              if (elem === uidData) {
                var sum = parseInt(likeData);
                sum = sum + 1;
                firebase.database().ref('bd').child('publication').child(elem).child('like').set(sum);
              }
            })
          })

          // eliminar post
          $('.container-delete').on('click', function (e) {
            e.preventDefault();
            var uidData = $(this).data('uid')
            var uidUser = $(this).data('delete')
            var textConfirm = confirm("¿seguro que quiere eliminar el post?")
            if (uidUser === codeUser) {
              uid.map(elem => {
                if (elem === uidData && textConfirm == true) {
                  firebase.database().ref('bd').child('publication').child(elem).remove();
                }
                else {
                  //se queda igual
                }
              })
            }
          })

          $('.container-delete').each(function () {
            var uidUser = $(this).attr('data-delete');
            if (codeUser === uidUser) {
              $(this).removeClass('delete')
            }
          });

          // editar post
          $('.container-edit').each(function () {
            var uidUser = $(this).attr('data-edit');
            if (codeUser === uidUser) {
              $(this).removeClass('delete')
            }
          });

          $('.container-edit').on('click', function () {
            var uidData = $(this).data('uid')
            var uidUser = $(this).data('edit')

            if (uidUser === codeUser) {
              uid.map(elem => {
                if (elem === uidData) {
                  $(this).prev().html(`<div><input type="text" class="input-edit" placeholder="Actualiza"/><button class="button-editar">Guardar</button></div>`)
                  $(this).prev().find('.button-editar').on('click', function () {
                    var newPublication = $(this).prev().val();
                    firebase.database().ref('bd').child('publication').child(elem).child('publication').set(newPublication);
                    $(this).parent().prev().html(`<p id="publication-day" class="text publication">${newPublication}</p>`)
                  })
                }
              })
            }
          })
        });
      }

      /* Privado */

      $buttonFoodPrivate.on('click', function (event) {
        if ($commentPrivate.val() && $commentPrivate.val() !== 0) {
          var publication = $commentPrivate.val();
          var hour = moment().format('LT');

          firebase.database().ref('bd').child(codeUser).child('publication').push({
            publication: publication,
            hour: hour,
            code: codeUser,
            name: nameUser,
            photo: photoUser !== null ? photoUser : 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
          });
        }
      });

      showPublicationPrivate();
      function showPublicationPrivate() {
        firebase.database().ref('bd').child(codeUser).on('value', (element) => {
          var data = element.child('publication').val();
          var uid = Object.keys(data)
          var arrNewData = []

          uid.map(elem => {
            data[elem].uid = elem
            arrNewData.push(data[elem])
          })

          $containerNewPostPrivate.html('');
          arrNewData.map(elem => { 
            $containerNewPostPrivate.prepend(`
                 <div class="col-xs-12 container-background container-food container-public-private">
                    <div id="container-icon-user" class="col-lg-1 container-food ">
                      <img class="profile img-responsive img-circle user-background" src='${elem.photo}'>
                    </div>
                    <div id="container-publication-private" class="col-lg-11 ">
                      <div class="container-img">
                        <div class="col-lg-12 img not-padding">
                          <img class="img-responsive like container-delete-private" src='../../img/muro/delete.svg' data-uid=${elem.uid} data-delete=${elem.code}>
                        </div>
                      </div>
                      <div class="container-publication-day" data-newPublication=${elem.code}>
                        <p id="publication-day-private" class="text publication">${elem.publication}</p>
                      </div>
                      <div></div>
                      <p class=" container-edit-private edit" data-uid=${elem.uid} data-edit=${elem.code}>Editar</p>
                      <div class="container-img">
                        <div class="col-lg-6 flex not-padding">
                        </div>
                        <div class="col-lg-6 not-padding">
                          <p class="text hour  img">${elem.hour}</p>
                        </div>
                      </div>
                    </div>
                </div>`);
          });

          // eliminar post
          $('.container-delete-private').on('click', function (e) {
            e.preventDefault();
            var uidData = $(this).data('uid')
            var uidUser = $(this).data('delete')
            var textConfirm = confirm("¿seguro que quiere eliminar el post?")
            if (uidUser === codeUser) {
              uid.map(elem => {
                if (elem === uidData && textConfirm == true) {
                  firebase.database().ref('bd').child(codeUser).child('publication').child(elem).remove();
                }
                else {
                  //se queda igual
                }
              })
            }
          })

          $('.container-edit-private').on('click', function () {
            var uidData = $(this).data('uid')
            var uidUser = $(this).data('edit')

            if (uidUser === codeUser) {
              uid.map(elem => {
                if (elem === uidData) {
                  $(this).prev().html(`<div><input type="text" class="input-edit" placeholder="Actualiza"/><button class="button-editar-private">Guardar</button></div>`)
                  $(this).prev().find('.button-editar-private').on('click', function () {
                    var newPublication = $(this).prev().val();
                    firebase.database().ref('bd').child(codeUser).child('publication').child(elem).child('publication').set(newPublication);
                    $(this).parent().prev().html(`<p id="publication-day-private" class="text publication">${newPublication}</p>`)
                  })
                }
              })
            }
          })
        });
      }
    } else {
      // No user is signed in.
    }
  });
});

// LogOut button 
$('#btnLogout').on('click', function () {
  firebase.auth().signOut()
    .then(() => {
      window.location.assign('../index.html');
    }).catch((error) => {
      // console.log('error al cerrar sesión');
    });
});





