# 💎 Bhilal Language v1.2.0

**Bhilal** est un langage de programmation moderne avec outils de cybersécurité intégrés (Node.js + Go).

🚀 **Installation ultra-simple** - Node.js et Go s'installent automatiquement !

## 🎯 Installation en 1 commande (npm)

```bash
npm install -g bhilal
```

L'installateur détecte et installe automatiquement :
- ✅ Node.js 14+ (si manquant)
- ✅ Go (si manquant) 
- ✅ Dépendances npm
- ✅ Compilation des outils de sécurité Go

**C'est tout !** Vous pouvez immédiatement utiliser `bhilal`.

## 🛠️ Usage rapide

```bash
bhilal mon_script.bh    # Exécuter un script
bhilal                 # Mode interactif (REPL)
```

## 🔐 Fonctions de cybersécurité

| Fonction | Description | Exemple |
|----------|-------------|---------|
| `scan_ports(host, ports)` | Scan TCP multi-threadé | `scan_ports("127.0.0.1", [80, 443])` |
| `dirbuster(url)` | Brute force répertoires web | `dirbuster("http://example.com")` |
| `dns_resolve(hostname)` | Résolution DNS | `dns_resolve("github.com")` |
| `dns_bruteforce(domain)` | Brute force sous-domaines | `dns_bruteforce("example.com")` |
| `subnet_scan(cidr)` | Scan réseau CIDR | `subnet_scan("192.168.1.0/24")` |
| `requete_http(url)` | Requêtes HTTP/HTTPS | `requete_http("https://api.github.com")` |

---

## 📝 Exemple de script de sécurité

```bhilal
# scan.bh - Scanner de sécurité simple
montre("=== Scan de ports ===")
soit resultats = scan_ports("127.0.0.1", [22, 80, 443, 3306])

pour chaque r dans resultats {
    si r.open {
        montre("✓ Port", r.port, "ouvert (", r.service, ")")
    }
}
```

**Bhilal** est un langage de programmation moderne, puissant et intuitif, conçu pour être simple à apprendre tout en offrant des fonctionnalités avancées comme la POO et une bibliothèque standard complète.

## 🚀 Fonctionnalités

- **Syntaxe Épurée** : Inspirée du C et du JavaScript, avec des braces `{}`.
- **POO Complète** : Classes, instantiation (`nouveau`) et héritage (`herite de`).
- **Bibliothèque Standard** : Fonctions intégrées pour les listes (`min`, `max`, `croissant`), l'aléatoire et la saisie utilisateur.
- **Mode Interactif (REPL)** : Testez votre code en temps réel.
- **Gestion des Erreurs** : Rapports précis avec numéro de ligne et de colonne.
- **CLI Globale** : Installez et lancez vos scripts `.bh` partout.

## 📦 Installation

```bash
# Clonez le dépôt
https://github.com/7Bhil/Language-Bhilal.git
cd Bhilal

# Installez les dépendances
npm install

# Installez la commande globalement
sudo npm link
```

## 🛠️ Usage

### ⚙️ Étape cruciale : Activer la commande
Pour pouvoir utiliser la commande `Bhilal` directement, allez dans le dossier du code et lancez l'installation :
```bash
cd language
sudo npm link
```

### Lancer un script
```bash
Bhilal mon_script.bh
```

### Mode Interactif (REPL)
```bash
Bhilal
```

## 📝 Exemple de Code

```bhilal
classe Animal {
    fonction manger() { montre("Miam !") }
}

classe Chien herite de Animal {
    fonction crier() { montre("Wouaf !") }
}

soit rex = nouveau Chien()
rex.manger()
rex.crier()

soit scores = [45, 12, 89]
montre("Meilleur score :", max(scores))
```

## 💻 Compatibilité

Bhilal est propulsé par **Node.js**, ce qui le rend compatible avec :
- **Windows** 🪟
- **macOS** 🍎
- **Linux** 🐧

> [!NOTE]
> Bien que le langage soit universel, certaines fonctions comme `execute()` dépendent des commandes disponibles sur votre système (par exemple, `ls` sur Linux vs `dir` sur Windows).

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.
# Language-Bhilal.
