export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            Copyright &copy; Rocketseat {currentYear}
        </footer>
    )
}