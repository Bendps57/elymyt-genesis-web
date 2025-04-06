
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, AlertCircle } from "lucide-react";

const Privacy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-gradient">Politique de Confidentialité</span>
            </h1>
            
            <div className="bg-white dark:bg-elimyt-dark/40 rounded-2xl shadow-lg p-8 md:p-10 prose prose-lg dark:prose-invert max-w-none">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 italic">
                <FileText className="h-4 w-4" />
                <span>Dernière mise à jour : {new Date().toLocaleDateString()}</span>
              </div>
              
              <div className="mb-10 p-4 border border-primary/20 bg-primary/5 dark:bg-primary/10 rounded-lg flex items-center gap-4">
                <div className="shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm md:text-base m-0">
                  Chez eLimyt, nous prenons la protection de vos données personnelles très au sérieux. 
                  Notre politique explique comment nous recueillons, utilisons et protégeons vos informations.
                </p>
              </div>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-3 items-center text-primary dark:text-primary">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">1</span> 
                Collecte des informations
              </h2>
              <p className="mb-6">
                Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et/ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et/ou carte de crédit.
              </p>
              <p className="mb-6">
                En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, y compris votre adresse IP, vos logiciels et votre matériel, et la page que vous demandez.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-3 items-center text-primary dark:text-primary">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">2</span> 
                Utilisation des informations
              </h2>
              <p className="mb-6">
                Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Fournir un contenu publicitaire personnalisé</li>
                <li>Améliorer notre site Web</li>
                <li>Améliorer le service client et vos besoins de prise en charge</li>
                <li>Vous contacter par e-mail</li>
                <li>Administrer un concours, une promotion, ou une enquête</li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-3 items-center text-primary dark:text-primary">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">3</span> 
                Confidentialité du commerce en ligne
              </h2>
              <p className="mb-6">
                Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et/ou une transaction.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-3 items-center text-primary dark:text-primary">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">4</span> 
                Divulgation à des tiers
              </h2>
              <p className="mb-6">
                Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-3 items-center text-primary dark:text-primary">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">5</span> 
                Protection des informations
              </h2>
              <p className="mb-6">
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne.
              </p>
              
              <div className="flex items-center gap-4 p-4 border border-primary/20 bg-primary/5 dark:bg-primary/10 rounded-lg mb-6">
                <Lock className="h-6 w-6 text-primary shrink-0" />
                <p className="text-sm m-0">
                  Toutes vos données personnelles sont cryptées et stockées de manière sécurisée 
                  conformément aux normes de l'industrie.
                </p>
              </div>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-3 items-center text-primary dark:text-primary">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">6</span> 
                Cookies
              </h2>
              <p className="mb-6">
                Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. En outre, nos cookies améliorent l'expérience d'utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-3 items-center text-primary dark:text-primary">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">7</span> 
                Se désabonner
              </h2>
              <p className="mb-6">
                Nous utilisons l'adresse e-mail que vous fournissez pour vous envoyer des informations et mises à jour relatives à votre commande, des nouvelles de l'entreprise de façon occasionnelle, des informations sur des produits liés, etc. Si à n'importe quel moment vous souhaitez vous désinscrire et ne plus recevoir d'e-mails, des instructions de désabonnement détaillées sont incluses en bas de chaque e-mail.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-3 items-center text-primary dark:text-primary">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">8</span> 
                Consentement
              </h2>
              <p className="mb-6">
                En utilisant notre site, vous consentez à notre politique de confidentialité.
              </p>
              
              <div className="flex items-center gap-4 p-4 border border-accent/30 bg-accent/5 dark:bg-accent/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-accent shrink-0" />
                <p className="text-sm m-0">
                  Pour toute question concernant cette politique de confidentialité, 
                  n'hésitez pas à nous contacter à contact@elimyt.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;
