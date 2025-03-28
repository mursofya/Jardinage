<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lucia - Services Paysagers</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #eef2f3; }
        .container { max-width: 900px; margin: 30px auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2); }
        h1, h2 { color: #2c3e50; text-align: center; }
        .service { margin-bottom: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
        .service img { width: 100%; border-radius: 8px; margin-top: 10px; }
        .faq { margin-top: 40px; }
        .faq h2 { text-align: center; }
        .faq-item { margin-top: 10px; padding: 10px; background: #ecf0f1; border-left: 5px solid #2980b9; border-radius: 5px; cursor: pointer; }
        .faq-item h3 { color: #2980b9; margin: 0; }
        .faq-item p { display: none; margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Lucia - Services Paysagers</h1>
        
        <div class="service">
            <h2>Service 5 : Élagage et abattage d’arbres</h2>
            <img src="elagage.jpg" alt="Élagage d'arbres">
            <p>Nous offrons des services professionnels d'élagage et d'abattage pour assurer la santé et la sécurité de vos arbres. Nos experts interviennent en toute sécurité et respectent l’environnement. L’élagage est essentiel pour prévenir les maladies, renforcer la structure de l’arbre et éviter les chutes de branches dangereuses.</p>
        </div>
        
        <div class="service">
            <h2>Service 6 : Arrosage automatique et éclairage extérieur</h2>
            <img src="arrosage.jpg" alt="Arrosage automatique">
            <p>Nous installons des systèmes d’arrosage automatique et des éclairages extérieurs pour embellir vos espaces verts et optimiser leur entretien. Un bon éclairage permet non seulement de mettre en valeur votre jardin, mais aussi d’assurer la sécurité autour de votre maison en évitant les zones d’ombre.</p>
        </div>
        
        <div class="faq">
            <h2>FAQ</h2>
            <div class="faq-item" onclick="toggleFaq(1)">
                <h3>Quels sont les avantages de l’élagage régulier ?</h3>
                <p id="faq1">L’élagage favorise la croissance saine de l’arbre, prévient les maladies et évite les risques liés aux branches fragiles.</p>
            </div>
            
            <div class="faq-item" onclick="toggleFaq(2)">
                <h3>Comment fonctionne l’arrosage automatique ?</h3>
                <p id="faq2">Un système d’arrosage automatique alimente vos plantes en eau de manière efficace et programmée, évitant le gaspillage.</p>
            </div>

            <div class="faq-item" onclick="toggleFaq(3)">
                <h3>Quels types d’éclairages extérieurs proposez-vous ?</h3>
                <p id="faq3">Nous proposons des éclairages solaires, LED et basse consommation adaptés à tous les espaces extérieurs.</p>
            </div>

            <div class="faq-item" onclick="toggleFaq(4)">
                <h3>Quand faut-il élaguer un arbre ?</h3>
                <p id="faq4">L’élagage se fait généralement à la fin de l’hiver ou au début du printemps, selon l’espèce d’arbre.</p>
            </div>

            <div class="faq-item" onclick="toggleFaq(5)">
                <h3>Quel est le coût d'une installation d'arrosage automatique ?</h3>
                <p id="faq5">Le prix varie en fonction de la taille de votre jardin et du type d’installation. Nous proposons des devis personnalisés pour vous offrir la meilleure solution adaptée à votre budget.</p>
            </div>
        </div>
    </div>
    
    <script>
        function toggleFaq(id) {
            let element = document.getElementById('faq' + id);
            element.style.display = (element.style.display === 'block') ? 'none' : 'block';
        }
    </script>
</body>
</html>
